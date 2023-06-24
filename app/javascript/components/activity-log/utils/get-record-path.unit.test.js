import { fromJS } from "immutable";

import getRecordPath from "./get-record-path";

describe("<ActivityLog />/utils/getRecordPath", () => {
  it("returns the correct path if the record type is Child", () => {
    expect(getRecordPath(fromJS({ record_type: "Child", record_id: "123" }))).to.equal("cases/123");
  });
});
