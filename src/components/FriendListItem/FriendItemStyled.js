import styled from 'styled-components';

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding-left: 8px;
  width: 100%;
  gap: 12px;
  border: 2px solid black;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.6);
`;
export const FriendStatus = styled.span`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
