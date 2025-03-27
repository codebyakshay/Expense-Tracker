// navigation defualt import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";

//constants

import GlobalStyles from "./constant/styles";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles,
        },
      }}
    >
      <Tab.Screen
        name="recent expense"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
        }}
      />
      <Tab.Screen
        name="all expense"
        component={AllExpenses}
        options={{
          title: "All Expenses",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Tab"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="manage expense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
