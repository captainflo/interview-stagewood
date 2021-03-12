const renderFieldPic = ({
  input,
  type,
  label,
  meta: { touched, error, warning },
}) => {
  delete input.value;

  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

export default renderFieldPic;
