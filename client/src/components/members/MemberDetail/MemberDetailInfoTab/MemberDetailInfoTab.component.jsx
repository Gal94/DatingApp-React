import { useState } from 'react';
import MemberImages from './MemberImages/MemberImages.component';
import {
    MemberDetailInfoOption,
    MemberDetailInfoOptions,
    MemberDetailInfoTabContainer,
    MemberDetailInfoText,
    MemberDetailInfoTitle,
} from './MemberDetailInfoTab.styles';

const MemberDetailInfoTab = (props) => {
    const [selectedTab, setSelectedTab] = useState('About');

    // Function to show the correct details based on clicked tab
    const TabToShow = () => {
        switch (selectedTab) {
            case 'About':
                return (
                    <div>
                        <MemberDetailInfoTitle>
                            Description
                        </MemberDetailInfoTitle>
                        <MemberDetailInfoText>
                            {props.member.introduction}
                        </MemberDetailInfoText>
                        <MemberDetailInfoTitle>
                            Looking for
                        </MemberDetailInfoTitle>
                        <MemberDetailInfoText>
                            {props.member.lookingFor}
                        </MemberDetailInfoText>
                    </div>
                );
            case 'Interests':
                return (
                    <div>
                        <MemberDetailInfoTitle>Interests</MemberDetailInfoTitle>
                        <MemberDetailInfoText>
                            {props.member.interests}
                        </MemberDetailInfoText>
                    </div>
                );
            case 'Photos':
                return (
                    <div>
                        <MemberDetailInfoTitle>Photos</MemberDetailInfoTitle>
                        <MemberImages photos={props.member.photos} />
                    </div>
                );
            case 'Messages':
                return (
                    <div>
                        <MemberDetailInfoTitle>Messages</MemberDetailInfoTitle>
                        <MemberDetailInfoText>
                            Messages Go Here
                        </MemberDetailInfoText>
                    </div>
                );
            default:
                return (
                    <div>
                        <MemberDetailInfoTitle>
                            Description
                        </MemberDetailInfoTitle>
                        <MemberDetailInfoText>
                            {props.member.introduction}
                        </MemberDetailInfoText>
                        <MemberDetailInfoTitle>
                            Looking for
                        </MemberDetailInfoTitle>
                        <MemberDetailInfoText>
                            {props.member.lookingFor}
                        </MemberDetailInfoText>
                    </div>
                );
        }
    };

    return (
        <MemberDetailInfoTabContainer>
            <MemberDetailInfoOptions>
                <MemberDetailInfoOption
                    onClick={() => setSelectedTab('About')}
                    active={selectedTab === 'About'}
                >
                    About {props.member.knownAs}
                </MemberDetailInfoOption>
                <MemberDetailInfoOption
                    onClick={() => setSelectedTab('Interests')}
                    active={selectedTab === 'Interests'}
                >
                    Interests
                </MemberDetailInfoOption>
                <MemberDetailInfoOption
                    onClick={() => setSelectedTab('Photos')}
                    active={selectedTab === 'Photos'}
                >
                    Photos
                </MemberDetailInfoOption>
                <MemberDetailInfoOption
                    onClick={() => setSelectedTab('Messages')}
                    active={selectedTab === 'Messages'}
                >
                    Messages
                </MemberDetailInfoOption>
                <MemberDetailInfoOption></MemberDetailInfoOption>
            </MemberDetailInfoOptions>
            {TabToShow()}
        </MemberDetailInfoTabContainer>
    );
};

export default MemberDetailInfoTab;
