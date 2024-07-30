import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [contact, setContact] = useState(false);

  useEffect(() => {
    const triggerFadeIn = () => setContact(true);
    setTimeout(triggerFadeIn, 1000);

    return () => {
      clearTimeout(triggerFadeIn);
    };
  });
  return (
    <>
      {contact ? (
        <form>
          <p>
            {
              "Want to get in touch? The best way to reach me is through my email: "
            }
            <br />
            {"cook.jon08@gmail.com"}
          </p>
          <a href="https://github.com/cookjon08">
            <FontAwesomeIcon icon={faGithub} size="xl" alt="Github link" />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-cook-660656205/">
            <FontAwesomeIcon icon={faLinkedin} size="xl" alt="Linkedin link" />
          </a>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default Contact;
