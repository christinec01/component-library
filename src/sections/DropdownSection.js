// @flow
import * as React from "react";
import Dropdown from "../library/Dropdown";
import Section from "../Section";
import Grid from "../library/Grid";
import FlexRow from "../library/FlexRow";
import CodeDemo from "../CodeDemo";

type Props = {};
type State = { selectedOption: string, selectedOptions: Array<string> };

const standardDropdownExample = `
<Dropdown
  onSelect={this.handleOptionSelect}
  value={this.state.selectedOption}
  options={[
    { name: "Option 1", value: 1 },
    { name: "Option 2", value: 2 },
    { name: "Option 3", value: 3 }
  ]}
/>
`;

const multiSelectDropdownExample = `
<Dropdown
  multi={true}
  onSelect={this.multiOptionSelect}
  value={this.state.selectedOptions}
  options={[
    { name: "Option 1", value: 1 },
    { name: "Option 2", value: 2 },
    { name: "Option 3", value: 3 }
  ]}
/>
`;
export default class DropdownSection extends React.Component<Props, State> {
  state = {
    selectedOption: "Pick an option",
    selectedOptions: []
  };

  handleOptionSelect = (selectedOption: string) => {
    this.setState({ selectedOption });
  };

  multiOptionSelect = (selectedOptions: Array<string>) => {
    this.setState({ selectedOptions });
  };

  render() {
    return (
      <Section header="Dropdowns">
        <div style={{ width: "67%" }}>
          <CodeDemo code="import Dropdown from 'Dropdown'" />
          <Grid orientation="horizontal">
            <div className="padding-top-small">
              <FlexRow spacing="medium">
                <div> Standard Dropdown:</div>

                <Dropdown
                  onSelect={this.handleOptionSelect}
                  value={this.state.selectedOption}
                  options={[
                    { name: "Option 1", value: 1 },
                    { name: "Option 2", value: 2 },
                    { name: "Option 3", value: 3 }
                  ]}
                />
              </FlexRow>
              <div className="padding-top-small">
                <CodeDemo code={standardDropdownExample} />
              </div>
            </div>
            <div className="padding-top-small">
              <FlexRow spacing="medium">
                <div> Multi-select Dropdown:</div>
                <Dropdown
                  multi={true}
                  onSelect={this.multiOptionSelect}
                  value={this.state.selectedOptions}
                  options={[
                    { name: "Option 1", value: 1 },
                    { name: "Option 2", value: 2 },
                    { name: "Option 3", value: 3 }
                  ]}
                />
              </FlexRow>
              <div className="padding-top-small">
                <CodeDemo code={multiSelectDropdownExample} />
              </div>
            </div>
          </Grid>
        </div>
      </Section>
    );
  }
}
