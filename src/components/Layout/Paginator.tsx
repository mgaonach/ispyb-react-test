import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Props {
  total: number;
  skip: number;
  limit: number;
}

export default function Paginator(props: Props) {
  const { total, skip, limit } = props;
  const navigate = useNavigate();
  const nPages = Math.ceil(total / limit);
  const currentPage = skip / limit + 1;

  const gotoPage = (page: number) => {
    const newSkip = limit * (page - 1);
    if (page === 1) {
      navigate('');
      return;
    }
    navigate(`?skip=${newSkip}&limit=${limit}`);
  };

  const changeLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate(`?limit=${e.target.value}`);
  };

  return (
    // <Container>
    <Row className="my-2 align-items-center" xs="auto">
      <Col className="text-nowrap">
        <div
          style={{ cursor: 1 !== currentPage ? 'pointer' : '' }}
          key="page-first"
          className={
            (1 === currentPage ? 'bg-gray' : 'bg-secondary') +
            ' border d-inline-block p-2 px-3 me-2'
          }
          onClick={() => gotoPage(1)}
        >
          &laquo;
        </div>
        {Array(nPages)
          .fill(0)
          .map((_, i) => (
            <div
              style={{ cursor: i + 1 !== currentPage ? 'pointer' : '' }}
              key={`page-${i}`}
              className={
                (i + 1 === currentPage
                  ? 'border-primary bg-light'
                  : 'bg-secondary') + ' border d-inline-block p-2 px-3 me-2'
              }
              onClick={() => gotoPage(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        <div
          style={{ cursor: nPages !== currentPage ? 'pointer' : '' }}
          key="page-last"
          className={
            (nPages === currentPage ? 'bg-gray' : 'bg-secondary') +
            ' border d-inline-block p-2 px-3 me-2'
          }
          onClick={() => gotoPage(nPages)}
        >
          &raquo;
        </div>
      </Col>
      <Col>
        <Form.Control as="select" onChange={changeLimit} defaultValue={3}>
          {[2, 3, 5, 10, 25].map((i) => (
            <option key={`limit-${i}`} value={i}>
              {i}
            </option>
          ))}
        </Form.Control>
      </Col>
      <Col>Total:</Col>
      <Col>{total}</Col>
    </Row>
    // </Container>
  );
}
