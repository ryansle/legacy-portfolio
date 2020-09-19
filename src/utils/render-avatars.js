// Assets
import swift from "../resources/skills/swift.svg";
import uikit from "../resources/skills/xcode.png";
import aws from "../resources/skills/aws.png";
import figma from "../resources/skills/figma.svg";
import react from "../resources/skills/react.svg";
import material from "../resources/skills/materialui.svg";
import graphql from "../resources/skills/graphql.svg";
import javascript from "../resources/skills/javascript.svg";
import kendo from "../resources/skills/kendo.png";
import asp from "../resources/skills/netcore.svg";
import sql from "../resources/skills/sql.png";
import java from "../resources/skills/java.png";
import javafx from "../resources/skills/javafx.png";
import gitlab from "../resources/skills/gitlab.svg";
import jira from "../resources/skills/jira.png";
import slack from "../resources/skills/slack.png";
import xchat from "../resources/skills/xchat.svg";
import dynamodb from "../resources/skills/dynamodb.png";
import cognito from "../resources/skills/cognito.png";
import amplify from "../resources/skills/amplify.png";
import appsync from "../resources/skills/appsync.png";
import xslt from "../resources/skills/xslt.svg";
import router from "../resources/skills/react-router.png";
import python from "../resources/skills/python.svg";
import selenium from "../resources/skills/selenium.svg";
import csharp from "../resources/skills/csharp.svg";
import dapper from "../resources/skills/dapper.png";
import html from "../resources/skills/html.svg";
import css from "../resources/skills/css.svg";
import visualstudio from "../resources/skills/visualstudio.svg";
import intellij from "../resources/skills/intellij.png";
import dropbox from "../resources/skills/dropbox.png";
import pokeball from "../resources/PokeBall.svg";
import swiftui from "../resources/skills/swiftui.png";
import unity from "../resources/skills/unity.svg";
import steamvr from "../resources/skills/steam.svg";
import kivy from "../resources/skills/kivy.svg";
import mysql from "../resources/skills/mysql.png";
import drupal from "../resources/skills/drupal.png";
import github from "../resources/skills/github.svg";
import alamofire from "../resources/skills/alamofire.png";
import kingfisher from "../resources/skills/kingfisher.png";
import testflight from "../resources/skills/testflight.png";
import pycharm from "../resources/skills/pycharm.png";

// If you are reading through this codebase, I apologize.
//  Because I render the skill chips with Array.map, I could
//  not think of a better way to render dynamic avatars as well.
// I tried to destringify the "tech" string and match it to the
//  name I use to import the assets, but that did not work. So
//  this is my workaround.
export const renderIcon = (tech) => {
  switch(tech) {
    case "Alamofire":
      return alamofire;
    case "Kingfisher":
      return kingfisher;
    case "PyCharm":
      return pycharm;
    case "SQLAlchemy":
      return sql;
    case "TestFlight":
      return testflight;
    case "Swift":
      return swift;
    case "UIKit":
      return uikit;
    case "Amazon Web Services":
      return aws;
    case "Figma":
      return figma;
    case "React.js":
      return react;
    case "Material-UI":
      return material;
    case "GraphQL":
      return graphql
    case "JavaScript":
      return javascript;
    case "Kendo UI":
      return kendo;
    case "ASP.NET Core":
      return asp;
    case "SQL":
      return sql;
    case "Java":
      return java;
    case "JavaFX":
      return javafx;
    case "GitLab":
      return gitlab;
    case "Jira":
      return jira;
    case "Slack":
      return slack;
    case "XChat":
      return xchat;
    case "AWS DynamoDB":
      return dynamodb;
    case "AWS Cognito":
      return cognito;
    case "XSLT":
      return xslt;
    case "AWS Amplify":
      return amplify;
    case "AWS AppSync":
      return appsync;
    case "React-Router":
      return router;
    case "Python":
      return python;
    case "Selenium":
      return selenium;
    case "C#":
      return csharp;
    case "Dapper":
      return dapper;
    case "HTML":
      return html;
    case "CSS":
      return css;
    case "Visual Studio":
      return visualstudio;
    case "JavaFX Scene Builder":
      return javafx;
    case "IntelliJ IDEA":
      return intellij;
    case "Dropbox":
      return dropbox;
    case "SwiftUI":
      return swiftui;
    case "Unity":
      return unity;
    case "SteamVR":
      return steamvr;
    case "Kivy":
      return kivy;
    case "MySQL":
      return mysql;
    case "PokéAPI":
      return pokeball;
    case "Drupal":
      return drupal;
    case "GitHub":
      return github;
    default:
      return;
  }
};