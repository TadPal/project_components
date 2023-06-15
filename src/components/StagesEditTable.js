import { MilestoneInsertButton } from "./MilestoneAddModal";
import { PencilSquare } from "react-bootstrap-icons";
import { DeleteStageButton } from "./DeleteStageButton";
import { MilestoneLinkButton } from "./MilestoneLinkModal";

/**
 * A React component that represents a table for editing stages.
 * @param {Object} props - The component props.
 * @param {Array} props.milestones - The array of milestones/stages.
 * @param {string} props.project - The project ID.
 * @returns {JSX.Element} The JSX element representing the stages edit table.
 */
export const StagesEditTable = ({ milestones, project }) => {
  if (milestones.length > 0) {
    return (
      <table className="table table-hover table-light">
        <thead className="table-success">
          <tr>
            <th>Stage</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Links</th>
            <th>Edit</th>
            <th>
              <MilestoneInsertButton projectId={project} />
            </th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((stage) => (
            <StageRow
              key={stage.id}
              name={stage.name}
              start={stage.startdate.substring(0, 10)}
              end={stage.enddate.substring(0, 10)}
              milestone={stage}
              milestones={milestones}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <span>
          <b>Stages:</b> Press to add stage
        </span>
        <span className="float-end">
          <MilestoneInsertButton projectId={project} />
        </span>
      </div>
    );
  }
};

/**
 * A React component that represents a row in the stages edit table.
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the stage.
 * @param {string} props.start - The start date of the stage.
 * @param {string} props.end - The end date of the stage.
 * @param {Object} props.milestone - The milestone object.
 * @param {Array} props.milestones - The array of milestones.
 * @returns {JSX.Element} The JSX element representing a stage row.
 */
export const StageRow = ({ name, start, end, milestone, milestones }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        <MilestoneLinkButton milestones={milestones} milestone={milestone} />
      </td>
      <td>
        <button className="btn btn-outline-success btn-sm">
          <PencilSquare />
        </button>
      </td>
      <td>
        <DeleteStageButton stageId={milestone.id} />
      </td>
    </tr>
  );
};
