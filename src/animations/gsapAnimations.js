import { gsap } from 'gsap';

export const onEnter = node => {
  gsap.from([node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6, {
    y: 30,
    delay: 0.6,
    ease: 'power3.InOut',
    opacity: 0,
    stagger: {
      amount: 0.6,
    },
  });
};

export const onExit = node => {
  gsap.to([node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6, {
    y: -30,
    ease: 'power3.InOut',
    stagger: {
      amount: 0.6,
    },
  });
};
