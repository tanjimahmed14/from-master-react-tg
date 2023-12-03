const Reuseabole = ({
  formTitle,
  handelClick,
  submitBtnText = "Submit",
  children,
}) => {
  // const handelClick = (e) => {
  //     e.preventDefault();
  //     console.log('this section is click')
  // }
  const handelLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handelClick(data);
  };
  return (
    <div>
      {children}
      {/* <h2>{formTitle}</h2> */}
      <form onSubmit={handelLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="password" name="password" />
        <br /> <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default Reuseabole;
