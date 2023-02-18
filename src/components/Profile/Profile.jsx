import PropTypes from 'prop-types'
import { ProfileContainer,PersonInfo,UserInfo,Name,StatsList,StatsItem,StatsNumber } from './ProfileStyled';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (<ProfileContainer>
        <PersonInfo>
            <div><img
                src={avatar}
                alt={username}
                className="avatar"
            /></div>
            <Name>{username}</Name>
            <UserInfo>@{tag}</UserInfo>
            <UserInfo>{location}</UserInfo>
        </PersonInfo>

        <StatsList>
            <StatsItem>
                <span className="label">Followers</span>
                <StatsNumber>{followers}</StatsNumber>
            </StatsItem>
            <StatsItem>
                <span className="label">Views</span>
                <StatsNumber>{views}</StatsNumber>
            </StatsItem>
            <StatsItem>
                <span className="label">Likes</span>
                <StatsNumber>{likes}</StatsNumber>
            </StatsItem>
        </StatsList>
    </ProfileContainer>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,}
    )

}