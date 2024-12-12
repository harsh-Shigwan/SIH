import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";
import HomeNavigation from "./Home/navigators/HomeNavigation";
import DoctorsNavigation from "./Doctors/DoctorsNavigation";
import PoliciesNavigation from "./Policies/PoliciesNavigation";
import QueriesNavigation from "./Queries/QueriesNavigation"; 
import AdminProfileNavigation from "./Profile/AdminProfileNavigation";
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View style={styles.tabItem} key={index}>
            {route.name === "HomeNavigation" ? (
              // Home tab - Custom SVG logo
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onPress={onPress}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
              </Svg>
            ) : route.name === "Doctors" ? (
              // Default SVG for other tabs
              <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none" onPress={onPress}>
  <path d="M17 21.5V18.5C17 15.672 17 14.257 16.121 13.379C15.243 12.5 13.828 12.5 11 12.5L9 14.5L7 12.5C4.172 12.5 2.757 12.5 1.879 13.379C1 14.257 1 15.672 1 18.5V21.5M13 12.5V18" stroke="#7A7979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 12.5V16.5M5.5 16.5C6.03043 16.5 6.53914 16.7107 6.91421 17.0858C7.28929 17.4609 7.5 17.9696 7.5 18.5V19.5M5.5 16.5C4.96957 16.5 4.46086 16.7107 4.08579 17.0858C3.71071 17.4609 3.5 17.9696 3.5 18.5V19.5M12.5 6V5C12.5 4.54037 12.4095 4.08525 12.2336 3.66061C12.0577 3.23597 11.7999 2.85013 11.4749 2.52513C11.1499 2.20012 10.764 1.94231 10.3394 1.76642C9.91475 1.59053 9.45963 1.5 9 1.5C8.54037 1.5 8.08525 1.59053 7.66061 1.76642C7.23597 1.94231 6.85013 2.20012 6.52513 2.52513C6.20012 2.85013 5.94231 3.23597 5.76642 3.66061C5.59053 4.08525 5.5 4.54037 5.5 5V6C5.5 6.45963 5.59053 6.91475 5.76642 7.33939C5.94231 7.76403 6.20012 8.14987 6.52513 8.47487C6.85013 8.79988 7.23597 9.05769 7.66061 9.23358C8.08525 9.40947 8.54037 9.5 9 9.5C9.45963 9.5 9.91475 9.40947 10.3394 9.23358C10.764 9.05769 11.1499 8.79988 11.4749 8.47487C11.7999 8.14987 12.0577 7.76403 12.2336 7.33939C12.4095 6.91475 12.5 6.45963 12.5 6ZM13.75 18.75C13.75 18.9489 13.671 19.1397 13.5303 19.2803C13.3897 19.421 13.1989 19.5 13 19.5C12.8011 19.5 12.6103 19.421 12.4697 19.2803C12.329 19.1397 12.25 18.9489 12.25 18.75C12.25 18.5511 12.329 18.3603 12.4697 18.2197C12.6103 18.079 12.8011 18 13 18C13.1989 18 13.3897 18.079 13.5303 18.2197C13.671 18.3603 13.75 18.5511 13.75 18.75Z" stroke="#7A7979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path
  fill-rule="evenodd"
  clip-rule="evenodd"
 d="M5.5 12.5V16.5M5.5 16.5C6.03043 16.5 6.53914 16.7107 6.91421 17.0858C7.28929 17.4609 7.5 17.9696 7.5 18.5V19.5M5.5 16.5C4.96957 16.5 4.46086 16.7107 4.08579 17.0858C3.71071 17.4609 3.5 17.9696 3.5 18.5V19.5M12.5 6V5C12.5 4.54037 12.4095 4.08525 12.2336 3.66061C12.0577 3.23597 11.7999 2.85013 11.4749 2.52513C11.1499 2.20012 10.764 1.94231 10.3394 1.76642C9.91475 1.59053 9.45963 1.5 9 1.5C8.54037 1.5 8.08525 1.59053 7.66061 1.76642C7.23597 1.94231 6.85013 2.20012 6.52513 2.52513C6.20012 2.85013 5.94231 3.23597 5.76642 3.66061C5.59053 4.08525 5.5 4.54037 5.5 5V6C5.5 6.45963 5.59053 6.91475 5.76642 7.33939C5.94231 7.76403 6.20012 8.14987 6.52513 8.47487C6.85013 8.79988 7.23597 9.05769 7.66061 9.23358C8.08525 9.40947 8.54037 9.5 9 9.5C9.45963 9.5 9.91475 9.40947 10.3394 9.23358C10.764 9.05769 11.1499 8.79988 11.4749 8.47487C11.7999 8.14987 12.0577 7.76403 12.2336 7.33939C12.4095 6.91475 12.5 6.45963 12.5 6ZM13.75 18.75C13.75 18.9489 13.671 19.1397 13.5303 19.2803C13.3897 19.421 13.1989 19.5 13 19.5C12.8011 19.5 12.6103 19.421 12.4697 19.2803C12.329 19.1397 12.25 18.9489 12.25 18.75C12.25 18.5511 12.329 18.3603 12.4697 18.2197C12.6103 18.079 12.8011 18 13 18C13.1989 18 13.3897 18.079 13.5303 18.2197C13.671 18.3603 13.75 18.5511 13.75 18.75Z"
  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
  fillOpacity="0.8"
/>
</Svg>

) : route.name === "Policies" ? (
<Svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none" onPress={onPress}>
  <path d="M9.47 21.5C5.478 21.5 3.481 21.5 2.24 20.328C1 19.157 1 17.271 1 13.5V9.5C1 5.729 1 3.843 2.24 2.672C3.481 1.5 5.478 1.5 9.47 1.5H10.53C14.523 1.5 16.519 1.5 17.76 2.672C19 3.843 19 5.729 19 9.5M9.5 21.5H11M6 6.5H14M6 11.5H11" stroke="#7A7979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5 18.09L14.598 21.243C14.5889 21.2788 14.5899 21.3163 14.6008 21.3516C14.6118 21.3868 14.6322 21.4183 14.66 21.4426C14.6877 21.467 14.7216 21.4831 14.758 21.4894C14.7944 21.4956 14.8317 21.4917 14.866 21.478L16.851 20.685C16.9466 20.6466 17.0534 20.6466 17.149 20.685L19.153 21.485C19.1865 21.4984 19.2231 21.5024 19.2587 21.4967C19.2943 21.491 19.3278 21.4758 19.3555 21.4526C19.3831 21.4294 19.404 21.3992 19.4159 21.3651C19.4278 21.331 19.4303 21.2944 19.423 21.259L18.659 17.991M20 15.495C19.9987 14.7002 19.682 13.9384 19.1196 13.3769C18.5571 12.8154 17.7948 12.5 17 12.5C15.343 12.5 14 13.841 14 15.495C14.0003 15.8887 14.0781 16.2784 14.229 16.642C14.3799 17.0056 14.601 17.3358 14.8796 17.614C15.1582 17.8921 15.4888 18.1126 15.8526 18.2629C16.2165 18.4132 16.6063 18.4904 17 18.49C18.657 18.49 20 17.15 20 15.495Z" stroke="#7A7979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path
  fill-rule="evenodd"
  clip-rule="evenodd"
 d="M15.5 18.09L14.598 21.243C14.5889 21.2788 14.5899 21.3163 14.6008 21.3516C14.6118 21.3868 14.6322 21.4183 14.66 21.4426C14.6877 21.467 14.7216 21.4831 14.758 21.4894C14.7944 21.4956 14.8317 21.4917 14.866 21.478L16.851 20.685C16.9466 20.6466 17.0534 20.6466 17.149 20.685L19.153 21.485C19.1865 21.4984 19.2231 21.5024 19.2587 21.4967C19.2943 21.491 19.3278 21.4758 19.3555 21.4526C19.3831 21.4294 19.404 21.3992 19.4159 21.3651C19.4278 21.331 19.4303 21.2944 19.423 21.259L18.659 17.991M20 15.495C19.9987 14.7002 19.682 13.9384 19.1196 13.3769C18.5571 12.8154 17.7948 12.5 17 12.5C15.343 12.5 14 13.841 14 15.495C14.0003 15.8887 14.0781 16.2784 14.229 16.642C14.3799 17.0056 14.601 17.3358 14.8796 17.614C15.1582 17.8921 15.4888 18.1126 15.8526 18.2629C16.2165 18.4132 16.6063 18.4904 17 18.49C18.657 18.49 20 17.15 20 15.495Z"
  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
  fillOpacity="0.8"
/>
  </Svg>
) : route.name === "Queries" ? (
  <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onPress={onPress}>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6148 5.90445C11.1646 2.86338 6.78715 2.68035 4.11824 5.50736C2.24836 7.48798 1.76224 10.3792 2.65983 12.8334H7.44438L10.4999 6.72459L13.9999 13.7235L15.7499 10.2246L17.0542 12.8334H25.34C26.2376 10.3793 25.7515 7.48798 23.8816 5.50736C21.2127 2.6804 16.8353 2.86338 14.385 5.90445L13.9999 6.38236L13.6148 5.90445ZM23.9125 15.1667H15.8876L13.9999 18.9421L10.4999 11.942L8.88759 15.1667H4.08734C4.09758 15.1777 4.10788 15.1887 4.11824 15.1996L13.995 25.6614L13.9998 25.6667H13.9999L23.8816 15.1996C23.8919 15.1887 23.9022 15.1777 23.9125 15.1667" fill="#221F1F" fill-opacity="0.6"/>
  <path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M13.6148 5.90445C11.1646 2.86338 6.78715 2.68035 4.11824 5.50736C2.24836 7.48798 1.76224 10.3792 2.65983 12.8334H7.44438L10.4999 6.72459L13.9999 13.7235L15.7499 10.2246L17.0542 12.8334H25.34C26.2376 10.3793 25.7515 7.48798 23.8816 5.50736C21.2127 2.6804 16.8353 2.86338 14.385 5.90445L13.9999 6.38236L13.6148 5.90445ZM23.9125 15.1667H15.8876L13.9999 18.9421L10.4999 11.942L8.88759 15.1667H4.08734C4.09758 15.1777 4.10788 15.1887 4.11824 15.1996L13.995 25.6614L13.9998 25.6667H13.9999L23.8816 15.1996C23.8919 15.1887 23.9022 15.1777 23.9125 15.1667" 
  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
  fillOpacity="0.8"
/>
</Svg>
) : route.name === "Profile" ?(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onPress={onPress}>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94782 16.58 7.40972C16.58 4.87163 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87163 7.38858 7.40972C7.38001 9.93925 9.42382 11.9973 11.9524 12.0059H11.9848Z" stroke="#221F1F" stroke-opacity="0.6" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
  <path
  fill-rule="evenodd"
  clip-rule="evenodd"

 d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94782 16.58 7.40972C16.58 4.87163 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87163 7.38858 7.40972C7.38001 9.93925 9.42382 11.9973 11.9524 12.0059H11.9848Z " 
  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
  fillOpacity="0.8"
/>
</svg>
            ) :  (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onPress={onPress}
              >
                <Path
                  d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
              </Svg>
            )}
            <Text
              onPress={onPress}
              style={[
                styles.label,
                { color: isFocused ? "#4C6FFF" : "#B0B0B0" },
              ]}
            >
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen
            name="Home"
            component={HomeNavigation}
            options={{ headerShown: false }}
          />

          <Tab.Screen name="Doctors" component={DoctorsNavigation} />
          <Tab.Screen name="Policies" component={PoliciesNavigation} />
          <Tab.Screen name="Queries" component={QueriesNavigation} />
          <Tab.Screen name="Profile" component={AdminProfileNavigation} />

          
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    minHeight: 60,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNav;
