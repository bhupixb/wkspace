export default {
  4: {
    name: 'C',
    mode: 'c_cpp',
    template: `#include <stdio.h>

int main(void) {
    // your code here
    return 0;
}
`
  },
  10: {
    name: 'C++',
    mode: 'c_cpp',
    template: `#include <bits/stdc++.h>
using namespace std;

typedef long long LL;
const double PI = 4 * atan(1);

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);

    // your code here

    cout.flush();
    return 0;
}
`
  },
  26: {
    name: 'Java',
    mode: 'java',
    template: `import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        // your code here

        out.close();
    }
}
`
  },
  34: {
    name: 'Python 3',
    mode: 'python',
    template: `# your code here
`
  },
  38: {
    name: 'Ruby',
    mode: 'ruby',
    template: `# your code here
`
  }
}
