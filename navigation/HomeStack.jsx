import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, View } from "react-native";
import { IconButton } from "../components";

import { auth } from "../config/firebase";

import { connect } from "react-redux";
import {
  editProfile,
  saveProfileChanges,
  discardProfileChanges,
} from "../redux/slices/userSlice";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

function HomeStack({
  isEditingProfile,
  editProfile,
  saveProfileChanges,
  discardProfileChanges,
}) {
  async function handleSignOut() {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("An error has occured while trying to sign out:", error);
    }
  }

  return (
    <Navigator>
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <View>
              <View>
                {isEditingProfile ? (
                  <>
                    <IconButton
                      name="checkcircleo"
                      size={24}
                      onPress={saveProfileChanges}
                    />
                    <IconButton
                      name="closecircleo"
                      size={24}
                      onPress={discardProfileChanges}
                    />
                  </>
                ) : (
                  <IconButton name="edit" size={24} onPress={editProfile} />
                )}
              </View>

              <View style={styles.logoutIcon}>
                <IconButton name="logout" size={24} onPress={handleSignOut} />
              </View>
            </View>
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  logoutIcon: {
    transform: [{ rotate: "180deg" }],
    marginRight: 12,
  },
});

HomeStack.propTypes = {
  isEditingProfile: PropTypes.bool.isRequired,
  editProfile: PropTypes.func.isRequired,
  saveProfileChanges: PropTypes.func.isRequired,
  discardProfileChanges: PropTypes.func.isRequired,
};

const mapStateToProps = ({ isEditingProfile }) => ({ isEditingProfile });
const mapDispacthToProps = {
  editProfile,
  saveProfileChanges,
  discardProfileChanges,
};
export default connect(mapStateToProps, mapDispacthToProps)(HomeStack);
