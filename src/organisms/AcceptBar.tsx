import React, { useEffect, useState } from "react";
import {
  AcceptButton,
  AcceptWrapper,
  Column,
  Description,
  Title,
} from "../atoms";
import { ACCEPT_COOKIES } from "../types";

interface AcceptProperties {
  acceptButtonText?: string;
  declineButtonText?: string;
  acceptCallback?: Function;
  declineCallback?: Function;
  title: string;
  description: string;
  showDecline: boolean;
}

/**
 *
 * @returns
 */
export function AcceptBar({
  acceptButtonText = "Accept All Cookies",
  declineButtonText = "Decline All Cookies",
  acceptCallback,
  declineCallback,
  title = "This site uses cookies",
  description = "Click to accept cookie tracking",
  showDecline = false,
}: AcceptProperties) {
  const [accepted, setAccepted] = useState<boolean>(true);

  useEffect(() => {
    // Get around evil NextJS server side rendering
    const storedValue =
      window.localStorage.getItem(ACCEPT_COOKIES.LOCAL_STORAGE_KEY) || null;
    const storedAccepted = storedValue ? JSON.parse(storedValue) : false;
    setAccepted(!!storedAccepted);
  }, []);

  useEffect(() => {
    // Get around evil NextJS server side rendering
    window.localStorage.setItem(
      ACCEPT_COOKIES.LOCAL_STORAGE_KEY,
      JSON.stringify(accepted)
    );
  }, [accepted]);

  const acceptCookies = () => {
    let proceed = true;
    if (acceptCallback) {
      proceed = acceptCallback();
    }
    if (proceed !== false) {
      setAccepted(true);
    }
  };

  const declineCookies = () => {
    let proceed = true;
    if (declineCallback) {
      proceed = declineCallback();
    }
    if (proceed !== false) {
      setAccepted(false);
    }
  };
  return (
    <>
      {!accepted && (
        <AcceptWrapper className="accept-bar">
          <Column>
            {title && <Title className="accept-title">{title}</Title>}
            {description && (
              <Description className="accept-description">
                {description}
              </Description>
            )}
            <div>
              <AcceptButton
                className="accept-button accept-button-accept"
                onClick={acceptCookies}
              >
                {acceptButtonText}
              </AcceptButton>
              {showDecline && (
                <AcceptButton
                  className="accept-button accept-button-decline"
                  onClick={declineCookies}
                >
                  {declineButtonText}
                </AcceptButton>
              )}
            </div>
          </Column>
        </AcceptWrapper>
      )}
    </>
  );
}
