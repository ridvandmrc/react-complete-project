/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { loaderService } from "@service";
import { plainToInstance } from "class-transformer";
import { addMessage } from "src/Store/notification-slice";
import { logService } from "src/Service/log";

export const useService = <T,>(
  promise: () => Promise<unknown>,
  classType: any,
  deps: unknown[] = []
) => {
  const [data, setData] = useState<T>();
  const [counter, setCounter] = useState(0);
  const trigger = () => setCounter((current) => current + 1);

  useEffect(() => {
    loaderService.increaseLoader();
    promise()
      .then((data: any) => {
        logService.success(`Data get Successfully:  ${data.data}`);
        setData(data.data.data);
        addMessage("uploaded successfully");
      })
      .catch((err) => {
        logService.error(err);
        addMessage("Error", "error");
      })
      .finally(() => loaderService.decreaseLoader());
  }, [counter, ...deps]);

  return { data: plainToInstance(classType, data) as T, trigger };
};
