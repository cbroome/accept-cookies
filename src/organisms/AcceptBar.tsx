import React from "react";
import styled from "styled-components";

interface AcceptProperties {
  acceptCallback: Function;
  declineCallback: Function;
}

const AcceptWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
`;

/**
 *
 * @returns
 */
export function AcceptBar({
  acceptCallback,
  declineCallback,
}: AcceptProperties) {
  const acceptCookies = () => {
    console.log("cookies accepted");
  };

  const declineCookies = () => {
    console.log("cookies declined");
  };
  return (
    <AcceptWrapper>
      <div>Accept Bar</div>
      <div>
        <button onClick={acceptCookies}>Accept Cookies</button>
        <button onClick={declineCookies}>Decline</button>
      </div>
    </AcceptWrapper>
  );
}
