import React from "react";
import styled, { css } from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong,...)``
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100rem;
      object-fit: cover;
      flex-shrink: 0;
    }
    span {
      font-weight: 300;
      font-size: 16px;
      color: #333;
    }
  }
  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: 500;
      font-size: 18px;
      color: black;
    }
  }
  .card-number {
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;
    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        ); ;
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3>Cosmic Perspective</h3>
          <span className="card-number">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
