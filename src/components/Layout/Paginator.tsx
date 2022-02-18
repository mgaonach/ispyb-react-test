import { Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Paginator({
  total,
  skip,
  limit,
}: {
  total: number;
  skip: number;
  limit: number;
}) {
  const navigate = useNavigate();
  const nPages = Math.round(total / limit);
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
    <Container>
      <Row>
        <Col>Page:</Col>
        <Col>
          {Array(nPages)
            .fill(0)
            .map((_, i) => (
              <div
                style={{ cursor: i + 1 !== currentPage ? 'pointer' : '' }}
                key={`page-${i}`}
                className={
                  (i + 1 === currentPage ? 'border-success' : '') +
                  ' border rounded d-inline-block p-2 m-1'
                }
                onClick={() => gotoPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
        </Col>
        <Col>Limit:</Col>
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
    </Container>
  );
}
