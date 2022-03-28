import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const [state, setState] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}api/react/article/${articleId}`)
      .then(response => {
        setState(response.data.article);
      });
  }, [articleId]);

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
              <h5 className="card-title">文章內容</h5>
            </div>

            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    文章名稱
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={state.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    文章作者
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    value={state.author}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    文章描述
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    value={state.content}
                    onChange={handleChange}
                  />
                </div>

                <div className="row gx-1 mb-3">
                  <div className="col-md-2 mb-1">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control form-control"
                        id="tag"
                        placeholder="請輸入標籤"
                        value={state.tag}
                        onChange={handleChange}
                      />
                      <button type="button" className="btn btn-outline-danger">
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章圖片</h5>
            </div>
            <div className="card-body">
              <img
                src={state.image}
                className="rounded mb-2 me-2"
                alt={state.image}
                style={{ width: 150 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
