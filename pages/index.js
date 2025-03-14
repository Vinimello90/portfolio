import { cards } from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

const addCards = new Section(
  {
    items: cards,
    renderer: (card) => {
      const createCard = new Card(
        {
          image: card.image,
          title: card.title,
          description: card.description,
          links: { onlineLink: card.link, gitHubLink: card.gitHubLink },
          gitHubLink: card.gitHubLink,
          handleCardClick: (evt) => {
            const clickedCardInfoElement = evt.target.parentNode;
            const cardInfoElements = document.querySelectorAll(".card__info");
            if (
              !clickedCardInfoElement.classList.contains("card__info_display")
            ) {
              cardInfoElements.forEach((cardInfoElement) => {
                if (cardInfoElement.classList.contains("card__info_display")) {
                  createCard.toggleDisplay(
                    cardInfoElement,
                    "card__info_display"
                  );
                }
              });
              createCard.toggleDisplay(
                clickedCardInfoElement,
                "card__info_display"
              );
            } else {
              createCard.toggleDisplay(
                clickedCardInfoElement,
                "card__info_display"
              );
            }
          },
        },
        {
          cardDesc: ".card__description",
          onlineLink: ".card__link_content_online",
          githubLink: ".card__link_content_github",
          toggleButton: ".card__button",
        }
      );
      addCards.addItem(createCard.renderCard());
    },
  },
  ".projects-grid"
);

addCards.renderer();
