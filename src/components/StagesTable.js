import { v1 as uuid } from 'uuid';

/**
 * A React component that represents a table of stages.
 * @param {Array} milestones - The array of milestones/stages.
 * @returns {JSX.Element} The JSX element representing the stages edit table.
 */
export const StagesTable = ({ milestones }) => {
  // Check if there are milestones
  if (milestones.length > 0) {
    return (
      <table className="table table-hover table-light">
        <thead className="table-success">
          <tr>
            <th>Stage</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Next</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate over the milestones and render a StageRow component for each */}
          {milestones.map((stage) => (
            <StageRow
              key={stage.id}
              name={stage.name}
              start={stage.startdate.substring(0, 10)}
              end={stage.enddate.substring(0, 10)}
              nexts={stage.nexts}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Stages:</b> Project has no assigned stages
        </p>
      </div>
    );
  }
};

/**
 * A React component that represents a row in the stages edit table.
 * @param {string} name - The name of the stage.
 * @param {string} start - The start date of the stage.
 * @param {string} end - The end date of the stage.
 * @param {Array} nexts - The array of linked milestones
 * @returns {JSX.Element} The JSX element representing a stage row.
 */
const StageRow = ({ name, start, end, nexts }) => {
  // If nexts is undefined or empty, create a default nexts array with a single item
  if (!nexts || nexts.length === 0) {
    nexts = [{ name: "X", id: uuid().toString() }];
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        {/* Render the names of the next stages */}
        {nexts.map((stage) => (
          <p key={stage.id}>{stage.name}</p>
        ))}
      </td>
    </tr>
  );
};
