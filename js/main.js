'use strict';

const news = [
  {
    title: `Minecraft's new frogs were briefly swallowing goats whole`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp`,
    category: 'Minecraft',
    body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
    date: '2022-02-01',
  },
  {
    title: `Portal Companion Collection marks Valve's first foray into Nintendo territory`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/4YPvYtD2rZqGcEPSvbZtLh-1024-80.jpg.webp`,
    category: 'Nintendo',
    body: "Nintendo hosted one of its regular Nintendo Direct showcases today, and aside from the frankly troubling new Kirby game coming later this year, which should be of concern to everyone, it was a pretty unexciting affair for PC gamers. Aside from one big announcement: Valve is bringing both Portal games to the handheld later this year, marking the very first time a Valve-developed game has featured on a Nintendo platform. Yes, Bridge Constructor Portal exists on Switch, but that was developed by ClockStone and, according to its Steam page, wasn't even published by Valve. The Portal: Companion Collection marks Valve's Nintendo debut proper, and features both the original Portal and its sequel, both ported in collaboration with NVIDIA Lightspeed Studios. As the name implies, that's an internal NVIDIA studio that has, among other things, worked on the Quake 2 RTX project.",
    date: '2022-02-02',
  },
  {
    title: `Minecraft is experimenting with frogs ahead of the next update`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/GfuKjTgFtFNzWcTRdbiiEU-1024-80.jpg.webp`,
    category: 'Minecraft',
    body: "Ahead of the Wild Update arriving sometime in 2022, Minecraft Bedrock is testing out those fun new frog mobs that will be joining officially in version 1.19. The new version of Minecraft for Windows includes frogs, their tiny tadpole babies, and several of their new features to test out. From what we know about the frog mobs so far, they spawn in swamp biomes where they'll spend time snapping fireflies out of the air and hopping on Dripleafs. We already knew some other neat things about frogs, like how they hatch as tadpoles and grow into one of three frog varieties based on the biome they mature in. Mojang had also let on that frogs would be useful to players in some fashion, but didn't initially let on how.",
    date: '2022-02-03',
  },
  {
    title: `You can now be a wookiee in Fortnite, but not Chewie`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/C2cxkttvDWTSbMYPuSmgGh-1024-80.jpg.webp`,
    category: 'Fortnite',
    body: "The latest live action series set in a galaxy far, far away, The Book of Boba Fett, has introduced us to some cool new Star Wars characters, including Ming-Na Wen's Fennec Shand and new-wookiee-in-town Krrsantan, an arm-ripping fiend who towers over everybody else. Now you can play as both of them in Fortnite thanks to yet another crossover between Disney and the battle royale game. Boba Fett himself previously joined Fortnite earlier last month, and he's also back in the item shop so you can fill out your own Book of Boba.",
    date: '2022-02-03',
  },
  {
    title: `This Minecraft replica of Final Fantasy 14's Sharlayan is so good I thought it was an in-game screenshot`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/hkhr3YJhakUEfdFFUik3vV-1024-80.jpg.webp`,
    category: 'Minecraft',
    body: "I am undeniably an absolute sucker for people recreating cool stuff in Minecraft, and nothing has hit my interests more than this fantastic Minecraft replica of Final Fantasy 14's Old Sharlayan. The Grecian-inspired city is the first new area you visit in Endwalker, the game's latest expansion. It's become one of my favourite zones in the game and this replica has done a great job at capturing how gosh-darn pretty the whole place is. The creation comes courtesy of a BiliBili user, who posted a two-minute video of their build to the Chinese social media site. It shows off the giant statue/fountain seen in the Endwalker trailer, the sage council building and the city's main aetheryte which is even spinning in the recreation. Sadly, there doesn't seem to be a way to check this out in Minecraft ourselves, so we'll just have to admire the trailer a few times.",
    date: '2022-02-04',
  },
];

const newsBox = document.querySelector('.newsWrapper');

function createTitle(text) {
  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('titleWrapper');

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = text;
  titleWrapper.append(title);

  return titleWrapper;
}

function createFeatureBtn() {
  const featureWrapper = document.createElement('div');
  featureWrapper.classList.add('featureWrapper');

  const toLikeBtn = document.createElement('button');
  toLikeBtn.classList.add('toLike');
  toLikeBtn.innerHTML = '<i class="fas fa-heart"></i>';

  let isLiked = false;
  toLikeBtn.addEventListener('click', () => {
    if (!isLiked) {
      toLikeBtn.style.color = '#ed3737';
      isLiked = true;
    } else {
      toLikeBtn.style.color = '#ffffff';
      isLiked = false;
    }
  });

  featureWrapper.append(toLikeBtn);
  return featureWrapper;
}

function createHeader(src, title) {
  const newHeader = document.createElement('header');
  newHeader.classList.add('newHeader');
  newHeader.style.backgroundImage = `url(${src})`;
  newHeader.append(createTitle(title), createFeatureBtn());

  return newHeader;
}

function createCategory(text) {
  const category = document.createElement('p');
  category.classList.add('category');
  category.classList.add('grey');
  category.textContent = text.toUpperCase();
  return category;
}

function createContent(text) {
  const content = document.createElement('p');
  content.classList.add('content');
  content.textContent = text;
  return content;
}

function createDate(articleDate) {
  const date = document.createElement('div');
  date.classList.add('date');
  date.classList.add('grey');
  date.textContent = articleDate;
  return date;
}

function createBody(category, body, date) {
  const newBody = document.createElement('section');
  newBody.classList.add('newBody');

  newBody.append(
    createCategory(category),
    createContent(body),
    createDate(date)
  );

  return newBody;
}

function createDeleteBtn() {
  const toDeleteBtn = document.createElement('button');
  toDeleteBtn.classList.add('toDelete');
  toDeleteBtn.innerHTML = '<i class="far fa-trash-alt trash"></i>';

  toDeleteBtn.onclick = (el) => {
    el.target.closest('.new').remove();
  };

  return toDeleteBtn;
}

function createFooter() {
  const newFooter = document.createElement('footer');
  newFooter.classList.add('newFooter');

  newFooter.append(createDeleteBtn());

  return newFooter;
}

function createArticle(src, title, category, body, date) {
  const article = document.createElement('article');
  article.classList.add('new');

  article.append(
    createHeader(src, /*category,*/ title),
    createBody(category, body, date),
    createFooter()
  );

  return article;
}

const articles = news.map(({ headerBgSrc, title, category, body, date }) =>
  createArticle(headerBgSrc, title, category, body, date)
);

newsBox.append(...articles);
