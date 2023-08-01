const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="Price" name="price" />

        <select name="category">
          <option>Cloths</option>
          <option>Food</option>
          <option>Electronics</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
