import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M200 100a99.738 99.738 0 01-7.264 37.485c-.011.027-.02.051-.032.077v.003a99.592 99.592 0 01-12.66 22.379 99.063 99.063 0 01-4.26 5.302 100.078 100.078 0 01-7.977 8.251l-.372.343a99.782 99.782 0 01-8.181 6.716 97.025 97.025 0 01-7.207 4.849c-.775.474-1.557.936-2.346 1.388a93.613 93.613 0 01-3.127 1.719c-.426.228-.855.447-1.284.666a75.63 75.63 0 01-2.222 1.094 99.029 99.029 0 01-18.255 6.624l-.094.024c-.382.098-.767.192-1.151.284-.287.071-.577.139-.867.204a58.671 58.671 0 01-1.9.42c-.337.071-.674.142-1.011.21-.205.045-.412.083-.616.122-.257.05-.512.097-.769.148-.142.029-.284.053-.429.077a71.673 71.673 0 01-2.633.443c-.403.063-.802.122-1.204.178-.474.068-.947.13-1.423.189-.131.021-.261.036-.391.051l-.506.062c-.34.041-.68.08-1.023.115-.178.021-.353.039-.53.056a92.151 92.151 0 01-3.917.323c-.343.02-.687.041-1.033.059a100.887 100.887 0 01-3.979.13h-.009a100.454 100.454 0 01-14.775-.89 98.902 98.902 0 01-9.651-1.781c-.127-.03-.254-.06-.379-.092-.32-.074-.636-.154-.952-.234-.281-.071-.56-.145-.84-.219a99.204 99.204 0 01-20.888-8.044l-.1-.053c-.193-.101-.382-.199-.572-.302a74.922 74.922 0 01-1.245-.669 99.428 99.428 0 01-6.876-4.148 84.941 84.941 0 01-2.24-1.518c-.186-.13-.373-.26-.556-.39a98.595 98.595 0 01-7.27-5.669 100.502 100.502 0 01-22.348-27.287A99.52 99.52 0 010 100C0 44.772 44.772 0 100 0c55.227 0 100 44.772 100 100z"
          fill="#fff"
        />
        <Path
          opacity={0.2}
          d="M116.08 197.228c.32-.074.636-.154.953-.234.281-.071.559-.145.84-.219.015-.589.035-1.237.056-1.938a431.178 431.178 0 012.953-38.047l.047-.388c.394-3.189.84-6.464 1.343-9.801.352-2.335.733-4.695 1.142-7.08l.089-.5a298.015 298.015 0 011.468-7.87c1.364-6.817 2.988-13.675 4.926-20.346a162.975 162.975 0 017.257-20.3 100.303 100.303 0 017.911-14.742l.133-.2c3.891-5.862 8.338-10.835 13.415-14.554l-1.054-1.438c-4.864 3.565-9.325 8.309-13.384 14.23l-.059.087a96.844 96.844 0 00-7.965 14.278 156.166 156.166 0 00-7.598 20.523c-1.94 6.515-3.681 13.573-5.221 21.175a317.003 317.003 0 00-1.551 8.231l-.248 1.441-.003.02c-.127.74-.249 1.479-.373 2.228a358.97 358.97 0 00-2.334 16.749 387.804 387.804 0 00-.42 3.748 349.607 349.607 0 00-.512 5.039l-.045.452-.071.778c-1.201 12.956-1.577 23.42-1.695 28.678zM138.76 188.731l.101-.053c.609-.317 1.213-.64 1.816-.971.199-2.361.465-4.956.814-7.683.074-.562.148-1.133.231-1.707.041-.308.086-.619.13-.932.349-2.403.763-4.882 1.26-7.373 2.021-10.166 5.376-20.556 10.947-26.971.299-.346.604-.677.92-1a20.032 20.032 0 012.548-2.233l-1.054-1.435a22.82 22.82 0 00-3.491 3.192c-.37.411-.731.839-1.083 1.284-5.127 6.453-8.328 16.006-10.322 25.465a138.676 138.676 0 00-1.604 9.195 176.706 176.706 0 00-1.213 11.222zM168.562 60.968a8.902 8.902 0 100-17.805 8.902 8.902 0 000 17.805zM165.695 137.597a8.902 8.902 0 100-17.803 8.902 8.902 0 100 17.803zM133.221 67.018c1.887 10.65-2.28 20.294-2.28 20.294s-7.228-7.624-9.115-18.274c-1.888-10.65 2.279-20.294 2.279-20.294s7.228 7.624 9.116 18.274z"
          fill="#000"
        />
        <Path
          opacity={0.2}
          d="M162.805 92.3c-10.158 3.714-20.366 1.33-20.366 1.33s6.263-8.406 16.421-12.12c10.158-3.715 20.366-1.332 20.366-1.332s-6.262 8.407-16.421 12.121zM164.528 160.158c-7.12 2.603-14.285.905-14.285.905s4.379-5.92 11.499-8.523c7.121-2.604 14.285-.906 14.285-.906s-4.379 5.92-11.499 8.524z"
          fill="#000"
        />
        <Path
          d="M130.166 158.66l.36.186c-.035.385-.121.621-.36-.186zM130.642 158.784l.012.127-.127-.065c.003-.038.006-.08.012-.121.029-.518-.006-1.13.103.059zM92.214 144.63c26.831 0 48.582-21.751 48.582-48.582 0-26.832-21.751-48.583-48.582-48.583-26.832 0-48.583 21.751-48.583 48.583 0 26.831 21.751 48.582 48.583 48.582z"
          fill="#2F2E41"
        />
        <Path
          d="M96.213 142.65c16.249 0 29.422-13.172 29.422-29.421 0-16.25-13.173-29.422-29.422-29.422-16.249 0-29.421 13.173-29.421 29.422 0 16.249 13.172 29.421 29.421 29.421z"
          fill="#D0CDE1"
        />
        <Path
          d="M163.393 169.618l-.035.009-6.843 1.642-14.249 3.42-1.944.468-21.668 5.198-1.84.444-52.571 12.615a98.682 98.682 0 01-10.4-4.683l-.1-.053c-.193-.101-.382-.199-.571-.302a74.526 74.526 0 01-1.246-.669 99.428 99.428 0 01-6.876-4.148 84.656 84.656 0 01-2.24-1.518l-.556-.39c-.488-.346-.973-.696-1.455-1.05 5.106-9.281 17.266-15.45 29.426-18.826 9.177-2.55 11.195-10.932 11.02-18.39a43.451 43.451 0 00-.431-5.083 49.53 49.53 0 00-1.764-7.911l29.423.982 3.036 6.994c-.083.768-.11 1.541-.08 2.313.231 5.737 3.772 9.447 8.142 11.841.568.31 1.151.6 1.743.87 7.165 3.257 15.6 3.479 15.6 3.479a30.04 30.04 0 017.719.145 26.06 26.06 0 0111.311 4.592 27.145 27.145 0 013.08 2.553 24.46 24.46 0 014.369 5.458z"
          fill="#D0CDE1"
        />
        <Path
          d="M167.808 173.497l-.373.343a99.782 99.782 0 01-8.181 6.716 97.317 97.317 0 01-7.207 4.849c-.775.474-1.557.936-2.346 1.388a93.613 93.613 0 01-3.127 1.719c-.426.228-.855.447-1.284.666a73.964 73.964 0 01-2.222 1.094l-1.252-1.038 14.699-17.965 2.955-3.612s1.181 0 3.888 1.97a38.892 38.892 0 014.231 3.651c.071.074.145.145.219.219z"
          fill="#D0CDE1"
        />
        <Path
          d="M167.6 173.296a3.314 3.314 0 01-.165.544 99.782 99.782 0 01-8.181 6.716 34.867 34.867 0 01-7.63 1.814s.222 1.112.423 3.035c-.775.474-1.557.936-2.346 1.388a93.613 93.613 0 01-3.127 1.719c-.426.228-.855.447-1.284.666a75.63 75.63 0 01-2.222 1.094 99.029 99.029 0 01-18.255 6.624l-.094.024c-.382.098-.767.192-1.151.284-.287.071-.577.139-.867.204a59.274 59.274 0 01-1.899.42c-.338.071-.675.142-1.012.21-.204.045-.412.083-.616.122-.257.05-.512.097-.769.148-.142.029-.284.053-.429.077a71.673 71.673 0 01-2.633.443c-.402.063-.802.122-1.204.178-.474.068-.947.13-1.423.189-.13.021-.261.036-.391.051l-.506.062c-.34.041-.68.08-1.023.115-.178.021-.352.039-.53.056a93.286 93.286 0 01-3.917.323c-.343.02-.687.041-1.033.059-.881.047-1.763.08-2.651.103-.44.012-.884.021-1.328.027h-.009a100.456 100.456 0 01-14.775-.89 98.902 98.902 0 01-9.65-1.781c-.128-.03-.255-.06-.38-.092-.32-.074-.636-.154-.952-.234-.281-.071-.56-.145-.84-.219a99.202 99.202 0 01-20.888-8.044l-.1-.053c-.193-.101-.382-.199-.572-.302a21517.873 21517.873 0 0166.033-15.29 6462.239 6462.239 0 0122.447-5.116l1.982-.443c7.003-1.574 12.441-2.77 15.39-3.367a23.987 23.987 0 012.409-.423l6.157 9.541.011.018zM47.766 75.374c7.993 0 14.472-6.479 14.472-14.471S55.758 46.43 47.766 46.43c-7.992 0-14.471 6.48-14.471 14.472 0 7.992 6.479 14.471 14.471 14.471zM136.662 71.24c7.992 0 14.471-6.48 14.471-14.472 0-7.992-6.479-14.471-14.471-14.471-7.993 0-14.472 6.479-14.472 14.471s6.479 14.472 14.472 14.472z"
          fill="#2F2E41"
        />
        <Path
          d="M121.157 50.566a14.469 14.469 0 0112.92-14.386 14.474 14.474 0 00-14.785 8.486 14.468 14.468 0 003.553 16.674 14.468 14.468 0 0011.232 3.612 14.47 14.47 0 01-12.92-14.386zM31.597 72.608a14.471 14.471 0 01-.84-19.318 14.47 14.47 0 1020.137 20.551 14.472 14.472 0 01-19.297-1.233zM92.214 73.307c-17.127 0-31.01 8.099-31.01 18.09 0 4.47 2.79 8.555 7.397 11.711l5.97-4.326-1.624 6.777c.674.312 1.362.614 2.08.893l8.917-10.404v12.782c2.735.438 5.5.657 8.27.655 17.126 0 31.01-8.098 31.01-18.089 0-9.99-13.884-18.09-31.01-18.09z"
          fill="#2F2E41"
        />
        <Path
          d="M122.19 56.768s-2.247 10.337 11.797 14.472L122.19 56.768zM61.204 58.65s5.168 11.556-10.337 16.724L61.204 58.65z"
          fill="#2F2E41"
        />
        <Path
          d="M68.869 124.779c1.303-.365 1.65-3.198.774-6.327-.876-3.13-2.643-5.371-3.947-5.006-1.304.365-1.65 3.198-.775 6.328.876 3.129 2.644 5.37 3.948 5.005zM128.572 114.36c.2-3.244-.734-5.941-2.085-6.024-1.352-.083-2.609 2.479-2.809 5.723-.2 3.243.734 5.94 2.086 6.023 1.351.084 2.609-2.478 2.808-5.722z"
          fill="#D0CDE1"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h200v200H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
