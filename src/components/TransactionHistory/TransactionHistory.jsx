import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.containerDiv}>
      <table className={clsx(css.containerTable, css.tableBorder)}>
        <thead className={css.trhead}>
          <tr>
            <th className={css.thtdStyle}>Type</th>
            <th className={css.thtdStyle}>Amount</th>
            <th className={css.thtdStyle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.trStyle}>
              <td className={css.thtdStyle}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </td>
              <td className={css.thtdStyle}>{amount}</td>
              <td className={css.thtdStyle}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
