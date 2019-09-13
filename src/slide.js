import React from "react";
import { Twitter } from "react-feather";

function Twip() {
  return (
    <div style={{ color: "#1DA1F2", textAlign: "center", marginBottom: 20 }}>
      <Twitter />
    </div>
  );
}

const slides = [
  null,

  <>
    <h1>Hallo</h1>
    <h2>nieuwe burger, who dis?</h2>
  </>,

  <>
    <h1>Hallo</h1>
    <h2>Sir, this is a Wendy's… </h2>
  </>,

  <h1>Design Systems</h1>,

  <>
    <h1>Design Systems</h1>
    <h2>Siddharth Kshetrapal</h2>
  </>,

  <>
    <h1>Design Systems</h1>
    <h2>
      Sid<span style={{ opacity: 0.25 }}>dharth Kshetrapal</span>
    </h2>
  </>,

  <blockquote>
    <Twip />
    When you hear designers refer to a Design System, they're referring to the design language
    & visual components.
    <br />
    <br />
    When you hear developers refer to a Design System they're referring to the component
    library.
    <br />
    <br />
    A Design System is both of these wrapped in a style guide 💻
    <br />
    <br />— Emma Wedekind (@EmmaWedekind)
  </blockquote>,

  <blockquote>
    Set of principles and patterns, shared and integrated, that define the overall design of a
    product
    <br />
    <br />— Karri Saarinen (@karrisaarinen)
  </blockquote>,

  <blockquote>
    An ecosystem of tools, guidelines, shared values & principles which helps teams more
    efficiently ship consistent design
    <br />
    <br />— Emily Plummer (@emplums)
  </blockquote>,

  "build a component library",

  <blockquote>
    Brand on a spectrum <br />
    <br />— Sophie Shepherd (@sophshepherd)
  </blockquote>,

  <blockquote>
    <Twip />
    The longer I do this, the more convinced I am that global design tokens and component
    design tokens are hugely different problems and the fact that everyone is treating them the
    same is why much of current solutions are brittle and rely almost entirely on convention.
    <br />
    <br /> Global tokens are to align on primitive values (colors, type, etc) and it's an
    important but somewhat smaller problem. They're one value (primary-color).
    <br />
    <br /> Component tokens are part of a platform-agnostic representation of how a component
    should look. They can't exist singularly. Fwiw I am actually thinking about this as
    separate from theming as well. Much of these tokens aren't necessarily designed to be
    customized by an end user.
    <br />
    <br />— Sarah Federman (@sarah_federman)
  </blockquote>,

  <blockquote>
    Strings are familiar and powerful for writing CSS, but objects contain an order of
    magnitude more power in how we author, transform, and apply styles
    <br />
    <br />— Christopher Biscardi(@chrisbiscardi)
  </blockquote>,

  <blockquote>
    Prior Art: <br />
    <br /> styled-system
    <br /> theme-ui
    <br /> salesforce-ux/theo
  </blockquote>,

  <blockquote>
    <Twip />
    Design Systems are for PEOPLE.
    <br />
    <br /> Design Systems tooling is great. But what makes a design system truly living,
    thriving, and successful are the people. Get the people parts right and you’re set up for
    success.
    <br />
    <br />— Jina Anne (@jina)
  </blockquote>,

  <blockquote>
    Notes:
    <br />
    <br />
    <span style={{ opacity: 0.5 }}>https://</span>sid.st/reactlive
    <br />
    <br />
    @siddharthkp
  </blockquote>
];

function Slide({ number }) {
  return <div>{slides[number] || "fin"}</div>;
}

export default Slide;
