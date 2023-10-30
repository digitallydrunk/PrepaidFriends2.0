import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./accordion.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SingleAccordion = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  const accordionVariants = {
    open: { height: 60 },
    closed: { height: 0 },
  };

  return (
    <main>
      <motion.div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between py-8 gap-4 cursor-pointer"
        initial={false}
        animate={toggle ? "open" : "closed"}
        variants={accordionVariants}
        transition={{ type: "tween" }}
      >
        <h4 className="font-bold text-lg">{item.title}</h4>
        <button>
          {toggle ? (
            <FiChevronUp className={`${styles["up-arrow"]} ${styles.bold}`} />
          ) : (
            <FiChevronDown className={styles.bold} />
          )}
        </button>
      </motion.div>
      <AnimatePresence>
        {toggle && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 30 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
            className="mb-4"
          >
            {item.content}
          </motion.p>
        )}
      </AnimatePresence>
    </main>
  );
};

export default SingleAccordion;
