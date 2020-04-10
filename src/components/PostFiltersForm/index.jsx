import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  handleSubmitForm: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  handleSubmitForm: null,
};

function PostFiltersForm(props) {
  const { handleSubmitForm } = props;
  const [term, setTerm] = useState("");
  // searchTerm
  //   gia tri khong thay doi khi render
  const typingTimeOutRef = useRef(null);

  function onHandleChange(e) {
    const value = e.target.value;
    setTerm(value);
    if (!handleSubmitForm) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        term: value,
      };

      handleSubmitForm(formValues);
    }, 300);
  }

  return (
    <div>
      <form className="ui form">
        <div className="ui field" style={{ marginBottom: "20px" }}>
          <input type="text" value={term} onChange={onHandleChange} />
        </div>
      </form>
    </div>
  );
}

export default PostFiltersForm;
