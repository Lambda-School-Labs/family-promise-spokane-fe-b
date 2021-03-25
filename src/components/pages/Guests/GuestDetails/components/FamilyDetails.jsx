import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../../../../api/axiosWithAuth';

import { Collapse, Typography } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const FamilyDetails = ({ familyId }) => {
  const [membersInfo, setMembersInfo] = useState([]);

  const fetchMembersInfo = async familyId => {
    try {
      const data = await axiosWithAuth()
        .get(`/families/${familyId}/members`)
        .then(res => res.data);

      const formattedData = data.map(member => ({ ...member.demographics }));
      setMembersInfo(formattedData);
    } catch (error) {
      console.log('error FamilyDetail.jsx 9');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMembersInfo(familyId);
  }, []);

  return (
    <div>
      <Collapse>
        {membersInfo.map(member => {
          console.log(member);
          return (
            <>
              <Panel header={member.first_name + ' ' + member.last_name}>
                <p>Relationship: {member.relationship}</p>
                <p>Date of Birth: {member.DOB}</p>
              </Panel>
            </>
          );
        })}
      </Collapse>
    </div>
  );
};

export default FamilyDetails;