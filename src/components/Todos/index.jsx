import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Todos.module.css";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

export default function Todos({ todos, onSubstraction, onAddition }) {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div
            key={{ index }}
            className={classnames(styles.todo, {
              [styles.todoDivider]: !(arr.length === index + 1),
            })}
          >
            {todo.title}
            <div className={styles.todoIconWrapper}>
              <button
                className={styles.todoActionButton}
                onClick={() => onSubstraction(index)}
              >
                <img src={minusIcon} alt="minus icon" />
              </button>
              <div className={styles.todoCount}>{todo.count}</div>
              <button
                className={styles.todoActionButton}
                onClick={() => onAddition(index)}
              >
                <img src={plusIcon} alt="plus icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func,
};
