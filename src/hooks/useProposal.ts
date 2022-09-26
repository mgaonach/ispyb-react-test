interface ProposalData {
  /**
   * The proposal name
   */
  proposalName: string | null;
  setProposalName: (proposal: string) => void;
  clearProposal: () => void;
}

/**
 * Get and set the current proposal from sessionStorage
 */
export function useProposal(): ProposalData {
  const proposalName = window.sessionStorage.getItem('proposal') || '';

  const setProposalName = (proposal: string) => {
    window.sessionStorage.setItem('proposal', proposal);
  };

  const clearProposal = () => {
    setProposalName('');
  };

  return {
    proposalName,
    setProposalName,
    clearProposal,
  };
}
