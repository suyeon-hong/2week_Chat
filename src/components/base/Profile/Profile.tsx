import gravatar from 'gravatar';
import { PROFILE_SIZE } from '@styles/constants/size';
import './Style.scss';

interface ProfileProps {
  userId: string;
  profileImage?: string;
}

// @NOTE: profile url: https://unsplash.it/100

const Profile = ({ userId, profileImage }: ProfileProps) => {
  return (
    <div className="profileWrapper">
      <img
        className="profile"
        src={
          profileImage
            ? profileImage
            : gravatar.url(userId, { s: PROFILE_SIZE, d: 'retro' })
        }
        alt="프로필 이미지"
      />
    </div>
  );
};

export default Profile;
