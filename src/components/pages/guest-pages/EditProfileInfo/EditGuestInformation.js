import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../../api/axiosWithAuth';
import EditFamMembers from './EditFamMembers';
import { connect, useSelector } from 'react-redux';
import actions from '../../../../state/actions/families';
import EditHouseHoldInfo from './EditHouseHoldInfo';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const EditGuestInformation = ({ fetchHousehold }) => {
  const [familyInfo, setFamilyInfo] = useState({});
  const [membersInfo, setMembersInfo] = useState({});

  console.log('houshold info', familyInfo);

  const user = useSelector(state => state.CURRENT_USER);

  const fetchFamilyHousehold = async () => {
    try {
      const res = await axiosWithAuth().get(`/users/${user.id}/family`);
      const family = res.data.family;
      setFamilyInfo(family);
      fetchHousehold(family.id);
    } catch (error) {
      alert('error');
    }
  };

  const fetchMembersData = async () => {
    try {
      const res = await axiosWithAuth().get(
        `/families/${familyInfo.id}/members`
      );
      console.log('Members ', res.data);
      setMembersInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFamilyHousehold();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchMembersData();
    // eslint-disable-next-line
  }, [familyInfo]);

  console.log('Parent component ', membersInfo);

  // const getAllState = (memberState) => {
  //   console.log([...memberState]);
  // };

  return (
    <>
      <h2>Family Member Information</h2>
      <Collapse>
        {Object.keys(membersInfo).map((member, key) => {
          return (
            <>
              <Panel
                header={`${membersInfo[member].demographics.first_name} ${membersInfo[member].demographics.last_name}`}
                key={key}
              >
                <EditFamMembers member={membersInfo[member]} key={key} />
              </Panel>
            </>
          );
        })}
      </Collapse>
      <div>
        <h2>Edit Household Information</h2>
        <EditHouseHoldInfo familyInfo={familyInfo} />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    household: state.HOUSEHOLD,
    loading: state.LOADING,
    family: state.FAMILY,
  };
}

const mapDispatchToProps = {
  fetchHousehold: actions.fetchHousehold,
  fetchMembers: actions.fetchMembers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGuestInformation);
