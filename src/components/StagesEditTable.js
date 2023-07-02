import { MilestoneInsertModalButton } from "./MilestoneAddModal";
import DeleteStageButton from "./DeleteStageButton";
import { MilestoneLinkModalButton } from "./MilestoneLinkModal";
import { MilestoneUpdateModalButton } from "./MilestoneUpdateModal";

/**
 * A React component that represents a table for editing stages.
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
              <MilestoneInsertModalButton projectId={project} />
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
          <MilestoneInsertModalButton projectId={project} />
        </span>
      </div>
    );
  }
};

/**
 * A React component that represents a row in the stages edit table.
 * @param {string} props.name - The name of the stage.
 * @param {string} props.start - The start date of the stage.
 * @param {string} props.end - The end date of the stage.
 * @param {Object} props.milestone - The milestone object.
 * @param {Array} props.milestones - The array of milestones.
 * @returns {JSX.Element} The JSX element representing a stage row.
 */
const StageRow = ({ name, start, end, milestone, milestones }) => {
  return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td><MilestoneLinkModalButton milestones={milestones} milestone={milestone}/></td>
        <td><MilestoneUpdateModalButton milestone={milestone}/></td>
        <td><DeleteStageButton stageId={milestone.id}/></td>
    </tr>
  );
};
