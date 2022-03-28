import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Article() {
  const [articles, setArticles] = useState([]);

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}api/react/articles`)
      .then(response => {
        setArticles(response.data.articles);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-white">
          <h5 className="">文章列表</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">名稱</th>
                <th scope="col">作者</th>
                <th scope="col">狀態</th>
                <th scope="col">標籤</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {articles.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.isPublic ? '公開中' : '非公開'}</td>
                    <td>{item.tag}</td>

                    <td>
                      <Link to={item.id} className="btn btn-sm btn-neutral">
                        查看
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="card-footer bg-white py-3 text-end">
          <span className="text-muted text-sm ">
            總共{articles.length}筆資料
          </span>
        </div>
      </div>
    </div>
  );
}

export default Article;
