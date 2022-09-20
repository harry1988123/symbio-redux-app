import React from "react";
import { Table, Spin } from "antd";

const Employee = ({ empData }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Employee Name",
      dataIndex: "employee_name",
    },
    {
      title: "Employee Salary",
      dataIndex: "employee_salary",
    },
    {
      title: "Employee Age",
      dataIndex: "employee_age",
    },
    {
      title: "Image",
      dataIndex: "profile_image",
      width: 50,
      maxWidth: 50,
      render: (url) => <img alt="" src={url} />,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={empData}
      pagination={{
        defaultPageSize: 16,
      }}
      rowKey="id"
      loading={{
        indicator: (
          <div>
            <Spin />
          </div>
        ),
        spinning: !empData,
      }}
    />
  );
};

export default Employee;
