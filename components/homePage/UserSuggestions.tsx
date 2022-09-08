import Image from 'next/future/image';
import { useAtom } from 'jotai';
import Link from 'next/link';
import atoms from '../../util/atoms';
import LoadingSuggestions from '../loadingComps/LoadingSuggestions';
import ProfilePicSVG from '../svgComps/ProfilePicSVG';

function UserSuggestions() {
  const [userDetails] = useAtom(atoms.userDetails);
  const [spotlightUsers] = useAtom(atoms.spotlightUsers);
  const [suggestionsLoading, setSuggestionsLoading] = useAtom(
    atoms.suggestionsLoading
  );

  return (
    <div className="mt-6 hidden max-w-[320px] flex-grow lg:block">
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`/${userDetails.displayName}`}>
            {userDetails.photoURL ? (
              <div>
                <Image
                  className="h-14 w-14 cursor-pointer select-none rounded-full object-cover"
                  src={userDetails.photoURL}
                  alt="avatar"
                  width="56"
                  height="56"
                />
              </div>
            ) : (
              <ProfilePicSVG height="56" width="56" strokeWidth="1" />
            )}
          </Link>
          <Link href={`/${userDetails.displayName}`}>
            <p className="ml-5 cursor-pointer text-sm font-semibold">
              {userDetails.displayName}
            </p>
          </Link>
        </div>
        <Link href={`/${userDetails.displayName}`}>
          <p className="cursor-pointer text-xs font-semibold text-[#0095f6]">
            Your profile
          </p>
        </Link>
      </div>
      <div className="pt-5">
        <div className="flex items-center justify-between pb-2">
          <p className="text-sm font-semibold text-[#818181]">User Spotlight</p>
          <Link href="/Explore">
            <p className="cursor-pointer text-xs font-semibold">
              See all users
            </p>
          </Link>
        </div>
        <div
          className={`${suggestionsLoading ? 'fixed opacity-0' : ''}`}
          onLoad={() => setSuggestionsLoading(false)}
        >
          {spotlightUsers.map((spotlightUserDetails) => (
            <div
              key={`${spotlightUserDetails.userId}Spotlight`}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-2">
                <Link href={`/${spotlightUserDetails.username}`}>
                  <div>
                    <Image
                      className="h-8 w-8 cursor-pointer select-none rounded-full object-cover"
                      src={spotlightUserDetails.avatarURL!}
                      alt="avatar"
                      width="32"
                      height="32"
                    />
                  </div>
                </Link>
                <div>
                  <Link href={`/${spotlightUserDetails.username}`}>
                    <p className="cursor-pointer text-xs font-semibold">
                      {spotlightUserDetails.username}
                    </p>
                  </Link>
                  <p className="text-xs text-[#818181]">
                    Followed by {spotlightUserDetails.followers!.length}{' '}
                    {spotlightUserDetails.followers!.length === 1
                      ? 'user'
                      : 'users'}
                  </p>
                </div>
              </div>
              <Link href={`/${spotlightUserDetails.username}`}>
                <p className="cursor-pointer text-xs font-semibold text-[#0095f6]">
                  Profile
                </p>
              </Link>
            </div>
          ))}
        </div>
        {suggestionsLoading ? <LoadingSuggestions /> : ''}
      </div>
    </div>
  );
}

export default UserSuggestions;
