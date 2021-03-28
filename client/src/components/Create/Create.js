import * as productService from "../../services/productService";

import "./Create.css";

const Create = ({ history }) => {
  const onCreateproductSubmitHandler = (e) => {
    e.preventDefault();

    // const { title, description, imageUrl, price, category } = e.target;

    const title = e.target.title.value;
    // console.log(title);
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const price = e.target.price.value;
    const category = e.target.category.value;

    productService
      .create(title, description, imageUrl, price, category)
      .then(() => {
        history.push("/");
      });
  };

  return (
    <div className="container">
      <h1 className="form-title">Add product</h1>
      <form onSubmit={onCreateproductSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <input
              name="title"
              type="text"
              className="form-control"
              id="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            name="imageUrl"
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Image URL"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              name="price"
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Price"
            />
          </div>
          <div className="form-group col-md-6">
            <select id="inputState" className="form-control" name="category">
              <option>Category...</option>
              <option value="shoes">Shoes</option>
              <option value="hats">Hats</option>
              <option value="jackets">Jackets</option>
            </select>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Add Product" />
      </form>
    </div>
  );
};
export default Create;
