export const cards = [
  {
    image: "./images/aprender.png",
    title: "Aprendendo a Aprender",
    description:
      "A página Aprendendo a Aprender é um projeto extra, desenvolvido em HTML e CSS, com o uso de animações para tornar a experiência mais dinâmica. Ela é dividida em seções que apresentam diversas técnicas e metodologias de aprendizado eficazes e conta com um iframe para incorporar vídeos do YouTube.",
    link: "https://vinimello90.github.io/web_extra_project_tripleten/",
    gitHubLink:
      "https://github.com/Vinimello90/web_extra_project_tripleten#readme",
  },
  {
    image: "./images/triple-espresso.png",
    title: "Triple Espresso",
    description:
      "Triple Espresso é uma landing page desenvolvida em HTML e CSS, contendo um menu de navegação e a descrição do café no header. O main é dividido em seções com receitas de café e a opção para reserva de mesa. O footer apresenta informações sobre as redes sociais e copyright.",
    link: "https://vinimello90.github.io/web_project_coffeeshop/",
    gitHubLink: "https://github.com/Vinimello90/web_project_coffeeshop#readme",
  },
  {
    image: "./images/triple-peaks.png",
    title: "Biblioteca Triple Peaks",
    description:
      "Triple Peaks é uma landing page desenvolvida em HTML e CSS. Possui um menu de navegação e a descrição da biblioteca no cabeçalho. O conteúdo é dividido em seções com indicações de livros da equipe, eventos no local e informações sobre como se tornar membro. O footer apresenta o horário de funcionamento e links para as redes sociais.",
    link: "https://vinimello90.github.io/web_project_library/",
    gitHubLink: "https://github.com/Vinimello90/web_project_library#readme",
  },
  {
    image: "./images/homeland.png",
    title: "De Pátria para Pátria",
    description:
      "Uma plataforma para profissionais compartilharem histórias e fotos de suas cidades natais, ajudando futuros profissionais de tecnologia a se sentirem em casa. O layout é responsivo, ajustando-se a diferentes telas por meio de unidades relativas e media queries, para manter a integridade do design.",
    link: "https://vinimello90.github.io/web_project_homeland/",
    gitHubLink: "https://github.com/Vinimello90/web_project_homeland#readme",
  },
  {
    image: "./images/around-us.png",
    title: "Around the US - EUA Afora",
    description:
      "Uma plataforma destinada ao usuário para adicionar, remover e curtir fotos, com um layout responsivo que se adapta a diferentes telas, utilizando unidades relativas e media queries. Foi desenvolvido no react.js e a plataforma faz o consumo de uma API para gerenciar as fotos e do usuário, garantindo a comunicação entre o front-end e o back-end.",
    link: "https://vinimello90.github.io/web_project_around_react/",
    gitHubLink:
      "https://github.com/Vinimello90/web_project_around_react#readme",
  },
  {
    image:
      "https://github.com/Vinimello90/news-explorer-frontend/blob/main/src/images/screenshot_not_found.png?raw=true",
    title: "NewsExplorer",
    description:
      "A aplicação web permite que usuários pesquisem notícias por tema e salvem artigos de interesse em suas contas. Desenvolvida em React.js, consome uma API de terceiros para exibir notícias e uma API própria para gerenciar usuários e artigos salvos. Foi implementado autenticação via Passkey, utilizando biometria ou chaves de segurança com SimpleWebAuthn. O layout é responsivo, adaptando-se a diferentes tamanhos de tela com unidades relativas e media queries.",
    link: "https://newsexplorer.protechadvanced.com/",
    gitHubLink: "https://github.com/Vinimello90/news-explorer-frontend#readme",
  },
];

export const introElement = document.querySelector(".intro");
export const navElement = introElement.querySelector(".nav");
export const navLinkElements = introElement.querySelectorAll(".nav__link");
export const openBtn = document.querySelector(".button_open");
export const closeBtn = document.querySelector(".button_close");
