import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  function handlePageChangeC(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div className="ui segment">
      <button
        disabled={_page <= 1}
        onClick={() => handlePageChangeC(_page - 1)}
        className="ui button primary"
      >
        Prev
      </button>
      <button
        disabled={_page >= totalPage}
        onClick={() => handlePageChangeC(_page + 1)}
        className="ui button primary"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
