import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const [state, setState] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}api/react/product/${productId}`)
      .then(response => {
        setState(response.data.product);
      });
  }, [productId]);

  function handleChange(event) {
    const { id, value } = event.target;
    setState({
      ...state,
      [id]: value,
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">產品資訊</h5>
            </div>

            <div className="card-body">
              <form className="row">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    產品名稱
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={state.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="origin_price" className="form-label">
                      產品定價
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="origin_price"
                      value={state.origin_price}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      產品售價
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      value={state.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    產品分類
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={state.category}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    產品描述
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    value={state.content}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">產品圖片</h5>
            </div>
            <div className="card-body">
              {state?.imagesUrl?.map((item, index) => {
                return (
                  <img
                    src={item}
                    className="rounded mb-2 me-2"
                    alt=""
                    key={index}
                    style={{ width: 150 }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
