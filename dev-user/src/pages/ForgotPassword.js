import React from "react";
import {
  API_ADMIN_URL,
  LOGIN_API,
  REGISTER_API,
  DOCTOR_API,
  DIGITAL_HUMAN_LIBRARY,
} from "../utill/api.endpoints";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Modal as Bmodal, Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import AppleSignin from "react-apple-signin-auth";
import { Card, Image } from "react-bootstrap";


