import { useReducer, useRef } from "react";
import { FormReducer, INITIAL_STATE } from "./FormReducer";

const Form = () => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tagRef.current.value = "";
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };


  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Description"
          name="desc"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Price"
          name="price"
        />

        <select name="category" onChange={handleChange}>
          <option>Cloths</option>
          <option>Food</option>
          <option>Electronics</option>
        </select>

        <textarea
          ref={tagRef}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="separate tags with comma"
        ></textarea>
        <br />
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div>
          {state.tags.map((tag) => (
            <button
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="quantity">
          <button onClick={handleDecrease}>-</button>
          <span>quantity: {state.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
