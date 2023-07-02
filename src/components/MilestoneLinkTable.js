import LinkAddButton from "./LinkAddButton";
import LinkRemoveButton from "./LinkRemoveButton";
import React from "react";

/**
 * A React component that represents a table of milestone links.
 * @param {Object} props.milestone - The milestone object.
 * @param {Object[]} props.milestones - The array of milestones.
 * @returns {JSX.Element} The JSX element representing the milestone link table.
 */
export const MilestoneLinkTable = ({ milestone, milestones }) => {
  const filteredMilestones = milestones.filter((stage) => stage.id !== milestone.id);

  if (filteredMilestones?.length > 0) {
    return (
      <table className="table table-hover table-light">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Add link</th>
            <th>Remove link</th>
          </tr>
        </thead>
        <tbody>
          {filteredMilestones.map((stage) => (
            <StageRow
              key={stage.id}
              milestoneName={stage.name}
              previousMilestone={milestone.id}
              nextMilestone={stage.id}
              previousMilestones={stage.previous}
            />
          ))}
        </tbody>
      </table>
    );
  }
};

/**
 * A React component that represents a row in the milestone link table.
 * @param {string} previousMilestone - The ID of the previous milestone.
 * @param {string} nextMilestone - The ID of the next milestone.
 * @param {string} milestoneName - The name of the milestone.
 * @param {Object[]} previousMilestones - The array of previous milestones.
 * @returns {JSX.Element} The JSX element representing the milestone link table row.
 */
const StageRow = ({ previousMilestone, nextMilestone, milestoneName, previousMilestones }) => {
  const prevMilestone = previousMilestones.find((milestone) => milestone.id === previousMilestone);
  const isAddButtonDisabled = prevMilestone ? true : false;

  return (
    <tr>
      <td>{milestoneName}</td>
      <td>
        <LinkAddButton disabled={isAddButtonDisabled} previous={previousMilestone} next={nextMilestone} />
      </td>
      <td>
        <LinkRemoveButton disabled={!isAddButtonDisabled} previous={previousMilestone} next={nextMilestone} />
      </td>
    </tr>
  );
};
