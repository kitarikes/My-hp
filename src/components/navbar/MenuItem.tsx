import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    zIndex: 100
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    zIndex: -100
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const texts = ["HOME", "About Me", "My Hobby"];
const links = ["/", "/about-me/", "/my-hobby/"];

export const MenuItem = ({ i }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  const content = `${texts[i]}`
  const link = `${links[i]}`
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" style={style}/> */}
      {/* <div className="text-placeholder" style={style}>{content}</div> */}
      <Link to={link}>{content}</Link> <br />
    </motion.li>
  );
};
