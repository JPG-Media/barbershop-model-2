import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props: any) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap: any = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props: any) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: 0,
      color: "rgb(255,208,0)",
      transition: { duration: 0.5, repeat:Infinity, repeatDelay: 1.5, }
    },
    visible: {
      y: 0,
      color: "rgb(255,208,0)", //#FF0088
      transition: { duration: 0.03}
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words: any = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word: any) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag: any = tagMap[props.type];

  return (
    <Tag>
      {words.map((word: any, index: any) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element: any, index: any) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedCharacters;
