// react imports
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

// navigation defualt import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//constants
import { MainGloabalStyle } from "./constant/MainGloabalStyle";

// screens
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: MainGloabalStyle.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: MainGloabalStyle.colors.primary500,
        },
        tabBarActiveTintColor: MainGloabalStyle.colors.accent500,
      }}
    >
      <Tab.Screen
        name="recent expense"
        component={RecentExpenses}
        options={{
          title: "Recent expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="hourglass-empty" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="all expense"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="date-range" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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
