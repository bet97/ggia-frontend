import { CbBreadcrumb } from "../components/CbBreadcrumb";
import React from "react";

export default {
  title: '"QgasSP/Consumption_Module/CbBreadcrumb',
  component: CbBreadcrumb,
  args: {},
};

const Template = (args) => <CbBreadcrumb {...args} />;

export const CbBreadcrumbNav = Template.bind({});
CbBreadcrumbNav.args = {
  primary: true,
  label: "CbBreadcrumb",
};
