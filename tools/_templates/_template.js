import Plugin from "@/js/core/Plugin";
import init from "@/js/core/init";

class #{blockname.pascalCase} extends Plugin {
  defaults() {
    return {};
  }

  init() {}

  buildCache() {}

  bindEvents() {}
}

export default init(#{blockname.pascalCase}, "#{blockname.paramCase}");
