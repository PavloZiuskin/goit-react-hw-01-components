import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: block;
  width: 240px;
  background-color: #fff;
  padding-top: 8px;
`;
export const PersonInfo = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  border-radius: 50%;

  img {
    margin-right: auto;
    margin-left: auto;
    width: 50%;
    object-fit: contain;
    border-radius: 50%;
    background-color: gray;
  }
`;
export const UserInfo = styled.p`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;
export const Name = styled.p`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
`;
export const StatsList = styled.ul`
  display: flex;
  padding: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  border: 1px solid #ded7d7;
  width: calc(100% / 3);
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding-top: 16px;
  padding-bottom: 16px;

  span {
    display: block;
    text-align: center;
  }
`;
export const StatsNumber = styled.span`
  text-align: center;
  font-weight: 900;
  font-size: 14px;
`;
