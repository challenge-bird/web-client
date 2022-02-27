function Spinner(): JSX.Element {
  return (
    <>
      <div className="d-flext justify-content-center">
        <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;

