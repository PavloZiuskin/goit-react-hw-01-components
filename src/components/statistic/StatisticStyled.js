import styled from 'styled-components';
import { getRandomHexColor } from 'helpersFunction/getColorHex';
export const SectionStats = styled.section`
  width: 240px;
  margin-bottom: 20px;
`;
export const StatisticList = styled.ul`
  display: flex;
  padding-right: 0;
  padding-left: 0;
`;
export const StatisticItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 4px;
  padding-left: 4px;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;

  background-color: ${getRandomHexColor};
  color: #fff;
`;
